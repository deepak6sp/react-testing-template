import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme';
import ReactComponent from './app';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

describe('test', () => {
  beforeEach(() => {
    enzyme.configure({ adapter: new Adapter() });
    jasmineEnzyme();
  });

  it("true", () => {
        const wrapper = enzyme.shallow(<ReactComponent />); 
        expect(wrapper.find(".myClass")).toExist();
        expect(wrapper).toHaveState({data: "some data"});
  });
  
});