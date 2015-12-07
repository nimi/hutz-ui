// jest.autoMockOff();
jest.dontMock('../src/InputCheckbox');

describe('InputCheckbox', function() {

	const React = require('react/addons');
	const InputCheckbox = require('../src/InputCheckbox');
	const TestUtils = React.addons.TestUtils;

	afterEach(function(done) {
        React.unmountComponentAtNode(document.body);
        document.body.innerHTML = '';
        setTimeout(done);
    });

	it('should be defined', function() {
		expect(InputCheckbox).toBeDefined();
	});

	it('should be a valid react component', function() {
		const checkbox = TestUtils.renderIntoDocument(<InputCheckbox />);
		expect(TestUtils.isCompositeComponent(checkbox)).toBeTruthy();
	});

});
