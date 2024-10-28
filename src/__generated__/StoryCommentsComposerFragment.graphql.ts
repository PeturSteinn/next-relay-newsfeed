/**
 * @generated SignedSource<<6c6198b615f6ebc8226394e3fccd6f74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type StoryCommentsComposerFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "StoryCommentsComposerFragment";
};
export type StoryCommentsComposerFragment$key = {
  readonly " $data"?: StoryCommentsComposerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryCommentsComposerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryCommentsComposerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "38598953772a95d8c9521072ce7eb169";

export default node;
