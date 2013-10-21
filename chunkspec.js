describe('chunk', function(){
	it('should evenly divide an array', function(){
		var input = [1,2,3,4,5,6,7,8,9,10];
		expect(chunk(input, 2)).toEqual(
			[[1,2,3,4,5],[6,7,8,9,10]]);
	});

	it('should have arrays one of 4 and two of 3', function(){
		var input = [1,2,3,4,5,6,7,8,9,10];
		expect(chunk(input, 3)).toEqual(
			[[1,2,3,4],[5,6,7],[8,9,10]]);
	});

	it('should have arrays 3 of 2 and 4 of 1', function(){
		var input = [1,2,3,4,5,6,7,8,9,10];
		expect(chunk(input, 7)).toEqual(
			[[1,2],[3,4],[5,6],[7],[8],[9],[10]]);
	});

});

