export default {
  renderNode(inProps, inEditor, inNext) {
    const { children, isFocused, isSelectecd, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'embed':
        return (
          <div {...attributes} className={'slate-plugin-embed-node'}>
            <span dangerouslySetInnerHTML={{ __html: value }} />
            <p>{children}</p>
          </div>
        );
      default:
        return inNext();
    }
  }
};
