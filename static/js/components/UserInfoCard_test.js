// @flow
import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';
import _ from 'lodash';

import UserInfoCard from './UserInfoCard';
import { USER_PROFILE_RESPONSE } from '../constants';
import { mstr } from '../lib/sanctuary';
import {
  getEmployer,
  getPreferredName,
} from '../util/util';

describe('UserInfoCard', () => {
  let sandbox, defaultRowProps, editProfileBtnStub, editAboutMeBtnStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    editProfileBtnStub = sandbox.stub();
    editAboutMeBtnStub = sandbox.stub();

    defaultRowProps = {
      profile: USER_PROFILE_RESPONSE,
      toggleShowPersonalDialog: editProfileBtnStub,
      toggleShowAboutMeDialog: editAboutMeBtnStub
    };
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('render user info card', () => {
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    assert.equal(wrapper.find(".profile-title").text(), getPreferredName(USER_PROFILE_RESPONSE));
    assert.equal(wrapper.find(".profile-company-name").text(), mstr(getEmployer(USER_PROFILE_RESPONSE)));
    assert.equal(wrapper.find(".profile-email").text(), USER_PROFILE_RESPONSE.email);
    assert.equal(wrapper.find("h3").text(), 'About Me');
    assert.equal(
      wrapper.find(".bio .placeholder").text(),
      'Write something about yourself, so others can learn a bit about you.'
    );
  });

  it('edit profile works', () => {
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    let editProfileButton = wrapper.find(".edit-profile-holder").childAt(0);
    editProfileButton.simulate('click');
    assert.equal(editProfileBtnStub.callCount, 1);
  });

  it('edit about me works', () => {
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    let editAboutMeButton = wrapper.find(".edit-about-me-holder").childAt(0);
    editAboutMeButton.simulate('click');
    assert.equal(editAboutMeBtnStub.callCount, 1);
  });

  it('edit about me is not available for other users is ', () => {
    defaultRowProps['profile'] = Object.assign(_.cloneDeep(USER_PROFILE_RESPONSE), {
      username: "xyz"
    });
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    assert.equal(wrapper.find(".edit-about-me-holder").children().length, 0);
  });

  it('set about me', () => {
    defaultRowProps['profile'] = Object.assign(_.cloneDeep(USER_PROFILE_RESPONSE), {
      about_me: "Hello world"
    });
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    assert.equal(wrapper.find("h3").text(), 'About Me');
    assert.equal(
      wrapper.find(".bio").text(),
      "Hello world"
    );
  });

  it('check multilines works me', () => {
    defaultRowProps['profile'] = Object.assign(_.cloneDeep(USER_PROFILE_RESPONSE), {
      about_me: "Hello \n world"
    });
    let wrapper = shallow(<UserInfoCard {...defaultRowProps} />);
    assert.equal(
      wrapper.find(".bio").html(),
      '<div class="bio">Hello \n world</div>'
    );
  });
});
