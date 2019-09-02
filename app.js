window.onload = function(){
    
    Barba.Pjax.start();
    
    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
          Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
        },
      
        fadeOut: function() {
        },
      
        fadeIn: function() {
            this.newContainer.classList.add('slide-in');
    
            let that = this;
    
            this.newContainer.addEvenListener('animationend', function(){
                that.newContainer.classList.remove('slide-in')
            })
        }
      });
      
      
      Barba.Pjax.getTransition = function() {
      
        return FadeTransition;
      };
   }
