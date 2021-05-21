describe('p5-teach',function(){
    let pInst;

    beforeEach(function () {
        pInst = new p5(function () {});
    });

    afterEach(function () {
        pInst.remove();
    });
    
    describe('drawGrid()',function () {

        it('Should be a function', function () {
            const { drawGrid } = pInst;
            expect(drawGrid).to.be.a('function');
        });

    });
    
    describe('fadeIn()',function () {

        it('Should be a function', function () {
            const { fadeIn } = pInst;
            expect(fadeIn).to.be.a('function');
        });

    });

    describe('typeWriter()',function () {

        it('Should be a function', function () {
            const { typeWriter } = pInst;
            expect(typeWriter).to.be.a('function');
        });

    });

    describe('writing()',function () {

        it('Should be a function', function () {
            const { writing } = pInst;
            expect(writing).to.be.a('function');
        });

    });
    
});