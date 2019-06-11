import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { File } from '@ionic-native/file/ngx';


@Injectable()
export class CameraService {
    constructor(
        private camera: Camera,
        private file: File
    ) { }

    /**
     * Tomar una foto y devolver el archivo (FileEntry)
     */
    takePictureAndReturnFile = () => new Promise(
        (resolve, reject) =>
            this.camera.getPicture({
                quality: 50,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            })
                .then(
                    imageData =>
                        this.file.resolveLocalFilesystemUrl(imageData)
                            .then(
                                (fileEntry: any) =>
                                    fileEntry.file(
                                        function(file) {
                                            
                                            const reader = new FileReader();
                                            reader.onloadend = function(e) {
                                                const imgBlob = new Blob([ this.result ],  { 
                                                    type: "image/jpeg"                                                    
                                                });
                                                
                                                resolve(imgBlob)
                                            };

                                            reader.readAsArrayBuffer(file);
                            
                                        },
                                        err => reject(err)
                                    )
                            )
                            .catch(err => reject(err))

                )
                .catch(err => reject(err))
    )


    // parseaTodo = () => {
    //     var fd = new FormData();
    //     window.resolveLocalFileSystemURL(attachment.img, function(fileEntry) {
            // fileEntry.file(function(file) {
            //     var reader = new FileReader();
            //     reader.onloadend = function(e) {
            //         var imgBlob = new Blob([ this.result ], { type: "image/jpeg" } );
            //         fd.append('attachment', imgBlob);
            //         fd.append('uuid', attachment.uuid);
            //         fd.append('userRoleId', 12345);
            //         console.log(fd);
            //         //post form call here
            //     };
            //     reader.readAsArrayBuffer(file);

            // }, function(e){$scope.errorHandler(e)});
    //     }, function(e){$scope.errorHandler(e)});
    // }


}