import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const image = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', marginRight: '5%' }}>
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">With Image</Text>
      </div>
      <div style={{ width: '200px' }}>
        <Placeholder withImage={false}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Without Image</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Molecules|Loaders/Placeholder/Variants',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph }
};
