// jest.autoMockOff();
jest.dontMock('../src/TextInput');

describe('TextInput', function() {

	const React = require('react/addons');
	const TextInput = require('../src/TextInput');
	const TestUtils = React.addons.TestUtils;

	afterEach(function(done) {
        React.unmountComponentAtNode(document.body);
        document.body.innerHTML = '';
        setTimeout(done);
    });

	it('should be defined', function() {
		expect(TextInput).toBeDefined();
	});

	it('should be a valid react component', function() {
		const input = TestUtils.renderIntoDocument(<TextInput />);
		expect(TestUtils.isCompositeComponent(input)).toBeTruthy();
	});

	it('should have a div wrapper', function() {
		const input = TestUtils.renderIntoDocument(<TextInput />);
		expect(React.findDOMNode(input).nodeName).toEqual('DIV');
	});

	it('should output a input element in wrapper', function() {
		const input = TestUtils.renderIntoDocument(<TextInput />);
		expect(React.findDOMNode(input).children[0].nodeName).toEqual('INPUT');
	});

	it('should have input type by default', function() {
		const input = TestUtils.renderIntoDocument(<TextInput />);
		expect(React.findDOMNode(input).children[0].getAttribute('type')).toBe('text');
	});

	it('should override input type if one is added', function() {
		const input = TestUtils.renderIntoDocument(<TextInput type="email" />);
		expect(React.findDOMNode(input).children[0].getAttribute('type')).toBe('email');
	});

	it('should have an onChange callback', function() {
		const input = TestUtils.renderIntoDocument(
			<TextInput onChange={() => 'Homer Simpson'} />);
		TestUtils.Simulate.click(React.findDOMNode(input));
	});

});
