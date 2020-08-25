import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Embed = ({ block, contentState }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src, height, width } = entity.getData();
  return (
    <div className="rdw-embedded-container">
      <iframe className="rdw-embedded-iframe" height={height} width={width} src={src} frameBorder="0" allowFullScreen title="Wysiwyg Embedded Content" />
    </div>
  );
};

Embed.propTypes = {
  block: PropTypes.object,
  contentState: PropTypes.object,
};

export default Embed;
