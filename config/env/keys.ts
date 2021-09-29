import keysStag from "./staging";
import keysDev from "./development";
import keysProd from "./production";
let env: any;

if (process.env.NODE_ENV === "development") {
    env = keysDev;
} else if (process.env.NODE_ENV === "staging") {
    env = keysStag;
} else if (process.env.NODE_ENV === "production") {
    env = keysProd;
} else {
    env = keysDev;
}
const keys = env;
export default keys;
