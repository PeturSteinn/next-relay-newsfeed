/**
 * @generated SignedSource<<5eb5df335b5d9d0a754e7676af9b8d96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type CommentFragment$data = {
  readonly text: string | null | undefined;
  readonly " $fragmentType": "CommentFragment";
};
export type CommentFragment$key = {
  readonly " $data"?: CommentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "dae25128e9e5d808e252fd838b73b4d4";

export default node;
