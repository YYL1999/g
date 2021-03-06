import { expect } from 'chai';
import Group from '../../src/group';
import * as Shape from '../../src/shape';
import getCanvas from '../get-canvas';

describe('SVG Canvas', () => {
  const container = 'svg-canvas';
  it('init', () => {
    const canvas = getCanvas(container);
    expect(canvas.get('container')).eql(canvas.get('el').parentNode);
    expect(canvas.get('width')).eql(1000);
    expect(canvas.get('height')).eql(1000);
    expect(canvas.getRenderer()).eql('svg');
    canvas.destroy();
  });

  it('autoDraw', () => {
    const canvas = getCanvas(container);
    const el = canvas.get('el');
    expect(el).not.eql(undefined);
    expect(el.style.width).eql('1000px');
    expect(el.style.height).eql('1000px');
    canvas.destroy();
  });

  it('getShapeBase', () => {
    const canvas = getCanvas(container);
    expect(canvas.getShapeBase()).eql(Shape);
  });

  it('getGroupBase', () => {
    const canvas = getCanvas(container);
    expect(canvas.getGroupBase()).eql(Group);
  });

  it('changesize', () => {
    const canvas = getCanvas(container);
    canvas.changeSize(200, 200);
    expect(canvas.get('width')).eql(200);
    expect(canvas.get('height')).eql(200);
    canvas.destroy();
  });

  it('add', () => {
    const canvas = getCanvas(container);
    const group = new Group({
      attrs: {},
    });
    expect(canvas.get('children').length).eql(0);
    canvas.add(group);
    expect(canvas.get('children').length).eql(1);
    canvas.destroy();
  });

  it('addGroup', () => {
    const canvas = getCanvas(container);
    expect(canvas.get('children').length).eql(0);
    const group = new Group({
      attrs: {},
    });
    canvas.addGroup(group);
    expect(canvas.get('children').length).eql(1);
    canvas.destroy();
  });

  it('clear', () => {
    const canvas = getCanvas(container);
    canvas.clear();
    expect(canvas.get('children').length).eql(0);
    canvas.destroy();
  });
});
