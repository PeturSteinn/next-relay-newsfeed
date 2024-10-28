/**
 * @generated SignedSource<<6a0f332568ffd87e7b60c96e42f8b458>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment } from 'relay-runtime';
export type OrganizationKind = "COMMERCIAL" | "GOVERNMENT" | "JOURNALISTIC" | "NONPROFIT" | "%future added value";
import type { FragmentRefs } from "relay-runtime";
export type PosterDetailsHovercardContentsBodyFragment$data = {
  readonly joined: string | null | undefined;
  readonly location?: {
    readonly name: string;
  } | null | undefined;
  readonly name: string | null | undefined;
  readonly organizationKind?: OrganizationKind | null | undefined;
  readonly profilePicture: {
    readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
  } | null | undefined;
  readonly " $fragmentType": "PosterDetailsHovercardContentsBodyFragment";
};
export type PosterDetailsHovercardContentsBodyFragment$key = {
  readonly " $data"?: PosterDetailsHovercardContentsBodyFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PosterDetailsHovercardContentsBodyFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PosterDetailsHovercardContentsBodyFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "joined",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Image",
      "kind": "LinkedField",
      "name": "profilePicture",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ImageFragment"
        }
      ],
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "organizationKind",
          "storageKey": null
        }
      ],
      "type": "Organization",
      "abstractKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Location",
          "kind": "LinkedField",
          "name": "location",
          "plural": false,
          "selections": [
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "type": "Person",
      "abstractKey": null
    }
  ],
  "type": "Actor",
  "abstractKey": "__isActor"
};
})();

(node as any).hash = "ac419fba8e8a6ba83d9f6e07d752b8b7";

export default node;
