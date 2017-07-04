class GistSketch {

    constructor: function(gistObject, setup){
	this.sketch = function(p){
	    p.preload = options.preload || function(){
                p.loadFont(`/assets/fonts/${setup.font}.otf`);
	    };
	    
	    if(typeof(gistObject.error) === 'string'){
                p.setup = function () {
		    let fontSize = setup.fontsize;
		    p.createCanvas(setup.width,setup.height);
		    p.background(0);
		    p.fill('#ED225D');
		    p.textFont(log);
		    p.textSize(fontSize);
		    p.text("Gist Compilation Error:\n"+gistObject.error, 10, (p.height/2)-fontSize);
		}
	    }
	    else{
		p.setup = gistObject.setup;
		p.draw  = gistObject.draw;
	    }
        };
    }
    
    run: function(container) {
	var that = this;
	return new Promise(function(resolve, reject) {
	    window.addEventListener("DOMContentLoaded", function(){
		resolve( new p5(that.sketch, container) );
	    });
	});
    }
}
