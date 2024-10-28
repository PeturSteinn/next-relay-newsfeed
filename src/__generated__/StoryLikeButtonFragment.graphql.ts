/**
 * @generated SignedSource<<c1452fb63f3cd9202e6e945a82a19e2a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type StoryLikeButtonFragment$data = {
  readonly doesViewerLike: boolean | null | undefined;
  readonly id: string;
  readonly likeCount: number | null | undefined;
  readonly " $fragmentType": "StoryLikeButtonFragment";
};
export type StoryLikeButtonFragment$key = {
  readonly " $data"?: StoryLikeButtonFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"StoryLikeButtonFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "StoryLikeButtonFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likeCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "doesViewerLike",
      "storageKey": null
    }
  ],
  "type": "Story",
  "abstractKey": null
};

(node as any).hash = "617c1de721141eb511915302fb80c08d";

export default node;
