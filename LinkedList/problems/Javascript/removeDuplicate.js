/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function() {
    let temp=head,temp2=head,count=0;
    while(temp2.next!=null){
        count++;
        temp2=temp2.next;
    }
    console.log(count)
    for(let i=0;i<count;i++){
        if(temp?.val===temp?.next?.val) { temp.next=temp.next.next;}
        temp=temp.next
    }
    
    
    return head;
  };