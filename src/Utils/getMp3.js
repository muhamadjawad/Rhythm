// var RNFS = require('react-native-fs');

// export const getMp3 = () => {
//   // get a list of files and directories in the main bundle
//   RNFS.readDir(RNFS.ExternalStorageDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
//     .then(result => {
//       console.log('GOT RESULT', result);

//       // stat the first file
//     })

//     .catch(err => {
//       console.log(err.message, err.code);
//     });
// };

// .then(statResult => {
//     if (statResult[0].isFile()) {
//       // if we have a file, read it
//       return RNFS.readFile(statResult[1], 'utf8');
//     }

//     return 'no file';
//   })
//   .then(contents => {
//     // log the file contents
//     console.log(contents);
//   })
