/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.apiv4.support.Credential', null, global);
goog.exportSymbol('proto.apiv4.support.Group_model', null, global);
goog.exportSymbol('proto.apiv4.support.Proof_of_work_produced', null, global);
goog.exportSymbol('proto.apiv4.support.Proof_of_work_required_to_continue', null, global);
goog.exportSymbol('proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apiv4.support.Credential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apiv4.support.Credential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apiv4.support.Credential.displayName = 'proto.apiv4.support.Credential';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apiv4.support.Group_model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apiv4.support.Group_model.repeatedFields_, null);
};
goog.inherits(proto.apiv4.support.Group_model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apiv4.support.Group_model.displayName = 'proto.apiv4.support.Group_model';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apiv4.support.Proof_of_work_required_to_continue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apiv4.support.Proof_of_work_required_to_continue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apiv4.support.Proof_of_work_required_to_continue.displayName = 'proto.apiv4.support.Proof_of_work_required_to_continue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apiv4.support.Proof_of_work_produced = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apiv4.support.Proof_of_work_produced, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apiv4.support.Proof_of_work_produced.displayName = 'proto.apiv4.support.Proof_of_work_produced';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apiv4.support.Credential.prototype.toObject = function(opt_includeInstance) {
  return proto.apiv4.support.Credential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apiv4.support.Credential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Credential.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionIdBis: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sessionSecret: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apiv4.support.Credential}
 */
proto.apiv4.support.Credential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apiv4.support.Credential;
  return proto.apiv4.support.Credential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apiv4.support.Credential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apiv4.support.Credential}
 */
proto.apiv4.support.Credential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionIdBis(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apiv4.support.Credential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apiv4.support.Credential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apiv4.support.Credential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Credential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionIdBis();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string session_id_bis = 1;
 * @return {string}
 */
proto.apiv4.support.Credential.prototype.getSessionIdBis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.apiv4.support.Credential.prototype.setSessionIdBis = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_secret = 2;
 * @return {string}
 */
proto.apiv4.support.Credential.prototype.getSessionSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.apiv4.support.Credential.prototype.setSessionSecret = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apiv4.support.Group_model.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apiv4.support.Group_model.prototype.toObject = function(opt_includeInstance) {
  return proto.apiv4.support.Group_model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apiv4.support.Group_model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Group_model.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupIdBis: jspb.Message.getFieldWithDefault(msg, 1, ""),
    groupNameBis: jspb.Message.getFieldWithDefault(msg, 2, ""),
    groupPermissionsIdBisList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apiv4.support.Group_model}
 */
proto.apiv4.support.Group_model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apiv4.support.Group_model;
  return proto.apiv4.support.Group_model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apiv4.support.Group_model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apiv4.support.Group_model}
 */
proto.apiv4.support.Group_model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupIdBis(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroupNameBis(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupPermissionsIdBis(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apiv4.support.Group_model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apiv4.support.Group_model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apiv4.support.Group_model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Group_model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupIdBis();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGroupNameBis();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGroupPermissionsIdBisList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string group_id_bis = 1;
 * @return {string}
 */
proto.apiv4.support.Group_model.prototype.getGroupIdBis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.apiv4.support.Group_model.prototype.setGroupIdBis = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string group_name_bis = 2;
 * @return {string}
 */
proto.apiv4.support.Group_model.prototype.getGroupNameBis = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.apiv4.support.Group_model.prototype.setGroupNameBis = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string group_permissions_id_bis = 3;
 * @return {!Array<string>}
 */
proto.apiv4.support.Group_model.prototype.getGroupPermissionsIdBisList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.apiv4.support.Group_model.prototype.setGroupPermissionsIdBisList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.apiv4.support.Group_model.prototype.addGroupPermissionsIdBis = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.apiv4.support.Group_model.prototype.clearGroupPermissionsIdBisList = function() {
  this.setGroupPermissionsIdBisList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.toObject = function(opt_includeInstance) {
  return proto.apiv4.support.Proof_of_work_required_to_continue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apiv4.support.Proof_of_work_required_to_continue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Proof_of_work_required_to_continue.toObject = function(includeInstance, msg) {
  var f, obj = {
    powWorkletIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    powType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    powChallenge: jspb.Message.getFieldWithDefault(msg, 3, ""),
    expiryIso: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apiv4.support.Proof_of_work_required_to_continue}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apiv4.support.Proof_of_work_required_to_continue;
  return proto.apiv4.support.Proof_of_work_required_to_continue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apiv4.support.Proof_of_work_required_to_continue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apiv4.support.Proof_of_work_required_to_continue}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPowWorkletIdentifier(value);
      break;
    case 2:
      var value = /** @type {!proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type} */ (reader.readEnum());
      msg.setPowType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPowChallenge(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExpiryIso(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apiv4.support.Proof_of_work_required_to_continue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apiv4.support.Proof_of_work_required_to_continue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Proof_of_work_required_to_continue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPowWorkletIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPowType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPowChallenge();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExpiryIso();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type = {
  CAPTCHA_1: 0,
  MEMORY_HARD_KEY_DERIVATION: 1
};

/**
 * optional string pow_worklet_identifier = 1;
 * @return {string}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.getPowWorkletIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.setPowWorkletIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pow_type pow_type = 2;
 * @return {!proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.getPowType = function() {
  return /** @type {!proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.apiv4.support.Proof_of_work_required_to_continue.Pow_type} value */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.setPowType = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string pow_challenge = 3;
 * @return {string}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.getPowChallenge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.setPowChallenge = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string expiry_iso = 4;
 * @return {string}
 */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.getExpiryIso = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.apiv4.support.Proof_of_work_required_to_continue.prototype.setExpiryIso = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apiv4.support.Proof_of_work_produced.prototype.toObject = function(opt_includeInstance) {
  return proto.apiv4.support.Proof_of_work_produced.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apiv4.support.Proof_of_work_produced} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Proof_of_work_produced.toObject = function(includeInstance, msg) {
  var f, obj = {
    powWorkletIdentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    powAnswer: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apiv4.support.Proof_of_work_produced}
 */
proto.apiv4.support.Proof_of_work_produced.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apiv4.support.Proof_of_work_produced;
  return proto.apiv4.support.Proof_of_work_produced.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apiv4.support.Proof_of_work_produced} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apiv4.support.Proof_of_work_produced}
 */
proto.apiv4.support.Proof_of_work_produced.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPowWorkletIdentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPowAnswer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apiv4.support.Proof_of_work_produced.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apiv4.support.Proof_of_work_produced.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apiv4.support.Proof_of_work_produced} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apiv4.support.Proof_of_work_produced.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPowWorkletIdentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPowAnswer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string pow_worklet_identifier = 1;
 * @return {string}
 */
proto.apiv4.support.Proof_of_work_produced.prototype.getPowWorkletIdentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.apiv4.support.Proof_of_work_produced.prototype.setPowWorkletIdentifier = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string pow_answer = 2;
 * @return {string}
 */
proto.apiv4.support.Proof_of_work_produced.prototype.getPowAnswer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.apiv4.support.Proof_of_work_produced.prototype.setPowAnswer = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.apiv4.support);
