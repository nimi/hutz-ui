
// jest.autoMockOff();
jest.dontMock('../src/Button');

describe('Button', function() {

	const React = require('react/addons');
	const Button = require('../src/Button');
	const TestUtils = React.addons.TestUtils;

	afterEach(function(done) {
        React.unmountComponentAtNode(document.body);
        document.body.innerHTML = '';
        setTimeout(done);
    });

	it('should be defined', function() {
		expect(Button).toBeDefined();
	});

	it('should be a valid react component', function() {
		const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
		expect(TestUtils.isCompositeComponent(button)).toBeTruthy();
	});

	it('should output a button element', function() {
		const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
		expect(React.findDOMNode(button).nodeName).toEqual('BUTTON');
	});

	it('should have button type by default', function() {
		const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
		expect(React.findDOMNode(button).getAttribute('type')).toBe('button');
	});

	it('should override button type if one is added', function() {
		const button = TestUtils.renderIntoDocument(<Button type="submit">Homer Button</Button>);
		expect(React.findDOMNode(button).getAttribute('type')).toBe('submit');
	});

	it('should have an onClick callback', function() {
		const button = TestUtils.renderIntoDocument(
			<Button onClick={() => 'Bart Simpson'} >Homer Button</Button>);
		TestUtils.Simulate.click(React.findDOMNode(button));
	});

	it('should be have active state during mousedown', function() {
		const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
		TestUtils.Simulate.mouseDown(React.findDOMNode(button));
		expect(button.state.active).toEqual(true);
	});

	it('should be not be active during mouseup', function() {
		const button = TestUtils.renderIntoDocument(<Button>Homer Button</Button>);
		TestUtils.Simulate.mouseUp(React.findDOMNode(button));
		expect(button.state.active).toEqual(false);
	});

});
