import React from 'react';

// SELECT tags_collection FROM metadata_items

export default function MissingPage() {
  return (
    <div>
      <ul>
        <li>Unmatched items</li>
        <li>Unavailable items</li>
        <li>
          Missing conent: tv show seasons/episodes or movies missing in
          collection
        </li>
      </ul>
    </div>
  );
}
