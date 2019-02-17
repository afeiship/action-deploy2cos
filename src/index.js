export default {
  renderMark(inProps, inEditor, inNext) {
    const { children, isFocused, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'embed':
        return (
          <span
            {...attributes}
            className={'slate-plugin-embed-node'}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        );
      default:
        return inNext();
    }
  }
};
