// jest.autoMockOff();
jest.dontMock('../src/InputText');

describe('InputText', function() {

	const React = require('react/addons');
	const InputText = require('../src/InputText');
	const TestUtils = React.addons.TestUtils;

	afterEach(function(done) {
        React.unmountComponentAtNode(document.body);
        document.body.innerHTML = '';
        setTimeout(done);
    });

	it('should be defined', function() {
		expect(InputText).toBeDefined();
	});

	it('should be a valid react component', function() {
		const input = TestUtils.renderIntoDocument(<InputText />);
		expect(TestUtils.isCompositeComponent(input)).toBeTruthy();
	});

	it('should have a div wrapper', function() {
		const input = TestUtils.renderIntoDocument(<InputText />);
		expect(React.findDOMNode(input).nodeName).toEqual('DIV');
	});

	it('should output a input element in wrapper', function() {
		const input = TestUtils.renderIntoDocument(<InputText />);
		expect(React.findDOMNode(input).children[0].nodeName).toEqual('INPUT');
	});

	it('should have input type by default', function() {
		const input = TestUtils.renderIntoDocument(<InputText />);
		expect(React.findDOMNode(input).children[0].getAttribute('type')).toBe('text');
	});

	it('should override input type if one is added', function() {
		const input = TestUtils.renderIntoDocument(<InputText type="email" />);
		expect(React.findDOMNode(input).children[0].getAttribute('type')).toBe('email');
	});

	it('should have an onChange callback', function() {
		const input = TestUtils.renderIntoDocument(
			<InputText onChange={() => 'Homer Simpson'} />);
		TestUtils.Simulate.click(React.findDOMNode(input));
	});

});
