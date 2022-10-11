require("dotenv").config();

const path = require("path");
const { execSync } = require("child_process");
const rimraf = require("rimraf");

const PROTO_DIR = process.env.PROTO_PATH;
const PROTO_REFLECTIONS = path.join(__dirname, "../reflections/reflection.bin");

const MODEL_DIR = path.join(__dirname, "../src/models/");

const PROTOC_PATH = "protoc";
const PLUGIN_PATH = path.join(
  __dirname,
  "../node_modules/.bin/protoc-gen-ts_proto"
);

rimraf.sync(`${MODEL_DIR}/*`, {
  glob: { ignore: `${MODEL_DIR}/tsconfig.json` },
});

const protoConfig = [
  `--plugin=${PLUGIN_PATH}`,
  // https://github.com/stephenh/ts-proto/blob/main/README.markdown
  "--ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true",
  `--ts_proto_out=${MODEL_DIR}`,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/**/*.proto`,
  `--ts_proto_opt=oneof=unions`,
  `--ts_proto_opt=addGrpcMetadata=true`,
  `--ts_proto_opt=outputClientImpl=false`,
  `--descriptor_set_out ${PROTO_REFLECTIONS}`,
  `--include_imports`,
];

// https://github.com/stephenh/ts-proto#usage
execSync(`${PROTOC_PATH} ${protoConfig.join(" ")}`);

console.log(`> Proto models created: ${MODEL_DIR}`);
