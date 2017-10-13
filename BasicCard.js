var BasicCard = function(front, back)
{
	this.front = front;
	this.back = back;
	this.flsdhCard = function()
	{
		 var data = {
            front: this.front,
            back: this.back
		};
        //console.log(JSON.stringify(data));
	}
}



module.exports = BasicCard;