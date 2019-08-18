// package: apiv4.revision
// file: include/revision.proto

import * as jspb from "google-protobuf";
import * as include_user_pb from "../include/user_pb";

export class Revision_metadata extends jspb.Message {
  getRevIdBis(): string;
  setRevIdBis(value: string): void;

  hasCreator(): boolean;
  clearCreator(): void;
  getCreator(): include_user_pb.User_public_model | undefined;
  setCreator(value?: include_user_pb.User_public_model): void;

  getCreationTimeBis(): string;
  setCreationTimeBis(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getRelatedPageIdBis(): string;
  setRelatedPageIdBis(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Revision_metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Revision_metadata): Revision_metadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Revision_metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Revision_metadata;
  static deserializeBinaryFromReader(message: Revision_metadata, reader: jspb.BinaryReader): Revision_metadata;
}

export namespace Revision_metadata {
  export type AsObject = {
    revIdBis: string,
    creator?: include_user_pb.User_public_model.AsObject,
    creationTimeBis: string,
    comment: string,
    relatedPageIdBis: string,
  }
}

