import App from "./src/containers/App";
import { Sentry } from 'react-native-sentry';
import {AppRegistry} from 'react-native';
import {DeleteVideosTask} from "./src/classroom/video-content/autodelete/DeleteVideosTask";


if (!__DEV__){
    Sentry.config('https://e41c4798d2404562a8beb32fb302352d:1f154e771c514709bafe4c451dadbd56@sentry.io/282948').install();
}


const app = new App();
AppRegistry.registerHeadlessTask('DeleteVideosTask', () => DeleteVideosTask);