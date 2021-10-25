var trash = document.getElementsByClassName("fa-trash");



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const user = this.parentNode.parentNode.childNodes[1].innerText
        const skin = this.parentNode.parentNode.childNodes[3].innerText
        fetch('/fortune', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'user': user,
            'skin': skin
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
