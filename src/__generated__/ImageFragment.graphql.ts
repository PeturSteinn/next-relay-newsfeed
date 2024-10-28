/**
 * @generated SignedSource<<d0b13ad377ba25245b91fc59bdd75947>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type ImageFragment$data = {
  readonly altText: string | null | undefined;
  readonly url: string;
  readonly " $fragmentType": "ImageFragment";
};
export type ImageFragment$key = {
  readonly " $data"?: ImageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ImageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "height"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "width"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "ImageFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "height",
          "variableName": "height"
        },
        {
          "kind": "Variable",
          "name": "width",
          "variableName": "width"
        }
      ],
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "altText",
      "storageKey": null
    }
  ],
  "type": "Image",
  "abstractKey": null
};

(node as any).hash = "cec0abfc31c05b982094d4487b66f6ab";

export default node;
