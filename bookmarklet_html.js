 let output_text = '' 
 let output_html = '<div>' 
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
   
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
  } catch (err) {
  }

  document.body.removeChild(textArea);
}
function copyTextToClipboard(text) {
   // navigator.clipboard.writeText requires manual permit in FB
    fallbackCopyTextToClipboard(text);
    return;
}

 function copy_as_html(){
   copyTextToClipboard(output_html);  
   setTimeout(function(){document.getElementById('id_parse_links').remove()},5000);     
 }
 function copy_as_text(){
   copyTextToClipboard(output_text);  
   setTimeout(function(){document.getElementById('id_parse_links').remove()},5000);     
     
 }
 function get_text_from_node(node) {
    if (typeof node === 'undefined' || typeof node.nodeName === 'undefined' ) {
        return true;
      }

      if (node.nodeType==Node.TEXT_NODE ) {
        output_text += node.nodeValue
        output_html += node.nodeValue + '</div><div>'          
        return true  }
      else if (node.nodeName=="A" ) {      
          const ahref = node.href;
          const aurl_params = new URLSearchParams(ahref.split('?').slice(1).join('?'));
          const aparams = Object.fromEntries(aurl_params.entries());
          if (typeof aparams['u']!=='undefined') {
              output_text += aparams['u'] + "\n"
              output_html += '<a href="'+aparams['u']+'" target="_blank">'+aparams['u'] + '</a>'          
          }
          return true;
      } else {
        node.childNodes.forEach(anode=>{get_text_from_node(anode )})
      }
}

function read_page(){
    const adialog = document.querySelectorAll('[role="dialog"]');  
   
    if (adialog.length) {
        const astory_message=adialog[0].querySelector('[data-ad-rendering-role="story_message"]');
    
        get_text_from_node(astory_message);
        output_html +=  '</div>'
        const insert_child = '<div style="padding:2rem;background-color:#b0f1ae;border:2px solid #095506;border-left:5px solid #095506;" id="id_parse_links">'+
            '<div style="padding:0.2rem;background-color:#fff;border:2px solid #000;">v clipboardu bude zkopirovany post jako jednoduchy html kod</div>' +
            '<div style="padding:1rem"></div>' +
            output_html+
            '</div>'
        astory_message.innerHTML = insert_child + astory_message.innerHTML
        copy_as_html()
    }
}

read_page();
