# importing libraries
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem import WordNetLemmatizer
import os,io
from google.cloud import vision_v1
from google.cloud.vision_v1 import types
import pandas as pd
from sentence_transformers import SentenceTransformer, util
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re
import math
from itertools import chain
from collections import Counter
from nltk.util import ngrams
from flask import Flask, request, jsonify, render_template,flash, redirect, url_for, send_from_directory
import os
from werkzeug.utils import secure_filename
UPLOAD_FOLDER = r'C:\Users\91807\Documents\HARSHA\Miniproject\VisionAPI\Images'
app=Flask(__name__)
@app.route("/mpredict", methods = ["POST"])
def mpredict():
    if request.method == 'POST':
        uploaded_file = request.files['file']
        filename = secure_filename(uploaded_file.filename)
        if filename != '':
            file_ext = os.path.splitext(filename)[1]
            if file_ext not in app.config['png']:
                abort(400)
            uploaded_file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
def extraction(inputimage,outputfile):
	os.environ['GOOGLE_APPLICATION_CREDENTIALS']=r'serviceAccountToken.json'
	client= vision_v1.ImageAnnotatorClient()
	FOLDER_PATH=r'C:\Users\91807\Documents\HARSHA\Miniproject\VisionAPI\Images'
	IMAGE_FILE=inputimage
	FILE_PATH=os.path.join(FOLDER_PATH,IMAGE_FILE)
	with io.open(FILE_PATH,'rb') as image_file:
		content=image_file.read()
	image = vision_v1.Image(content=content)
	response = client.document_text_detection(image=image)
	docText=response.full_text_annotation.text
	with open(outputfile, 'w') as f:
		f.writelines(docText)
#print(docText)
extraction('ds answerkey.png','file.txt')
extraction('ds answer.png','input.txt')
#Text Summarisation
# Input text - to summarize
def Summarisation(input,output):
	with open(input) as f:
		text1 = f.readlines()
	text = str(text1)
	# Tokenizing the text
	stopWords = set(stopwords.words("english"))
	words = word_tokenize(text)
	# Creating a frequency table to keep the score of each word
	freqTable = dict()
	for word in words:
		word = word.lower()
		if word in stopWords:
			continue
		if word in freqTable:
			freqTable[word] += 1
		else:
			freqTable[word] = 1
	# Creating a dictionary to keep the score of each sentence
	sentences = sent_tokenize(text)
	sentenceValue = dict()
	for sentence in sentences:
		for word, freq in freqTable.items():
			if word in sentence.lower():
				if sentence in sentenceValue:
					sentenceValue[sentence] += freq
				else:
					sentenceValue[sentence] = freq
	sumValues = 0
	for sentence in sentenceValue:
		sumValues += sentenceValue[sentence]
	# Average value of a sentence from the original text
	average = int(sumValues / len(sentenceValue))
	# Storing sentences into our summary.
	summary = ''
	for sentence in sentences:
		if (sentence in sentenceValue) and (sentenceValue[sentence] > (1.0 * average)):
			summary += " " + sentence
	#print(summary)
	with open(output, 'w') as f:
		f.writelines(summary)
Summarisation('file.txt','sumtext1.txt')
Summarisation('input.txt','sumtext2.txt')
#PreProcessing
def preprocessing(input,output):
	with open(input) as f:
		text3 = f.readlines()
	paragraph = str(text3)
	# Tokenize Sentences
	sentences = nltk.sent_tokenize(paragraph.lower())
	# Tokenize Words
	words = nltk.word_tokenize(str(sentences))
	new_words= [word for word in words if word.isalnum()]
	WordSet = []
	test=[]
	for word in new_words:
		WordSet.append(word)
		test.append(word)
	#print(WordSet)
	lm= WordNetLemmatizer()
	for word in WordSet:
		test.append(lm.lemmatize(word))
	#print(WordSet)
	#test = []
	#for word in WordSet:
		#test.append(lm.lemmatize(word, pos="v"))
	#print(test)
	test1 = str(test)
	with open(output, 'w') as f:
		f.writelines(test1 +" ")
preprocessing('input.txt','pre1.txt')
preprocessing('file.txt','pre2.txt')
#Cosine Similarity
count_vect = CountVectorizer()
with open('file.txt') as f:
    text = f.readlines()
text1 = str(text)
with open('input.txt') as f:
    text = f.readlines()
text2 = str(text)
corpus = [text1,text2]
X_train_counts = count_vect.fit_transform(corpus)
pd.DataFrame(X_train_counts.toarray(),columns=count_vect.get_feature_names_out(),index=['Document 1','Document 2'])
vectorizer = TfidfVectorizer()
trsfm=vectorizer.fit_transform(corpus)
pd.DataFrame(trsfm.toarray(),columns=vectorizer.get_feature_names_out(),index=['Document 1','Document 2'])
a=cosine_similarity(trsfm[0:1], trsfm)
Cosine=a[0][1]
#print("Cosine:",Cosine) #cosine similarity
#Jaccard Similarity
def jaccard_distance(a,b):
    a = set(a)
    b = set(b)
    return 1.0 * len(a&b)/len(a|b)
def test(filea,fileb):
    with open(filea) as f:
    	text3 = f.readlines()
    a = str(text3)
    with open(fileb) as f:
    	text4 = f.readlines()
    b = str(text4)
    Jaccard=jaccard_distance(a,b)
   # print("Jaccard:",Jaccard)
    return Jaccard
jc=test('input.txt','file.txt')

#Semantic Similarity
model = SentenceTransformer('stsb-roberta-large')
with open('file.txt') as f:
    text = f.readlines()
sentence1 = str(text)
with open('input.txt') as f:
    text = f.readlines()
sentence2 = str(text)
embedding1 = model.encode(sentence1, convert_to_tensor=True)
embedding2 = model.encode(sentence2, convert_to_tensor=True)
cosine_scores = util.pytorch_cos_sim(embedding1, embedding2)
Semantic=cosine_scores.item()
#print("Semantic:",Semantic)
#Bigram Similarity
NGRAM = 2
re_sent_ends_naive = re.compile(r'[.\n]')
re_stripper_alpha = re.compile('[^a-zA-Z]+')
re_stripper_naive = re.compile('[^a-zA-Z\.\n]')
splitter_naive = lambda x: re_sent_ends_naive.split(re_stripper_naive.sub(' ', x))
sent_detector = nltk.data.load('tokenizers/punkt/english.pickle')
def get_tuples_nosentences(txt):
    if not txt: return None
    ng = ngrams(re_stripper_alpha.sub(' ', txt).split(), NGRAM)
    return list(ng)
def similarity_ngrams(a, b):
    vec1 = Counter(a)
    vec2 = Counter(b)
    intersection = set(vec1.keys()) & set(vec2.keys())
    numerator = sum([vec1[x] * vec2[x] for x in intersection])
    sum1 = sum([vec1[x]**2 for x in vec1.keys()])
    sum2 = sum([vec2[x]**2 for x in vec2.keys()])
    denominator = math.sqrt(sum1) * math.sqrt(sum2)
    if not denominator:
        return 0.0
    return float(numerator) / denominator
def test():
    with open('input.txt') as f:
    	text3 = f.readlines()
    a1 = str(text3)
    a = get_tuples_nosentences(a1)
    with open('file.txt') as f:
    	text4 = f.readlines()
    b1 = str(text4)
    b = get_tuples_nosentences(b1)
    bigram=similarity_ngrams(a,b)
    return bigram
    #print("Bigram:",bigram)
bg=test()
def score():
	ss=1.9 * Semantic
	cs=0.5 * Cosine
	bgram=1.3 * bg
	jcard=1.2 * jc
	mark=ss+cs+bgram+jcard
	print("Mark scored by student: ",mark)
score()