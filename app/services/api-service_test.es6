/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Api', () => {
  let service;

  beforeEach(module('pharzone'));

  beforeEach(inject((Api) => {
    service = Api;
  }));

  it('should equal Api', () => {
    expect(service.get()).toEqual('Api');
  });
});
