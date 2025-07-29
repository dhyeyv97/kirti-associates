/*====================
  upload image js
======================*/
document.addEventListener("DOMContentLoaded", function () {
    ImgUpload();
});

function ImgUpload() {
    var imgArray = [];

    document.querySelectorAll(".upload-object").forEach(function (input) {
        input.addEventListener("change", function (e) {
            var imgWrap = this.closest(".upload-box").querySelector(
                ".upload-files-result"
            );
            if (!imgWrap) {
                console.error("Cannot find .upload-files-result element.");
                return;
            }
            var hiddenUpload =
                this.closest(".upload-box").querySelector(".upload-hidden");

            var maxLength = parseInt(this.getAttribute("data-max_length"));

            var files = e.target.files;
            var filesArr = Array.prototype.slice.call(files);

            filesArr.forEach(function (f) {
                if (!f.type.match("image.*")) {
                    return;
                }

                if (imgArray.length >= maxLength) {
                    return false;
                }

                var len = imgArray.filter(Boolean).length;

                if (len >= maxLength) {
                    return false;
                } else {
                    imgArray.push(f);

                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var html =
                            "<div class='upload__img-box'><div style='background-image: url(" +
                            e.target.result +
                            ")' data-number='" +
                            document.querySelectorAll(".upload__img-close").length +
                            "' data-file='" +
                            f.name +
                            "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                        imgWrap.insertAdjacentHTML("beforeend", html);
                        if (hiddenUpload) {
                            hiddenUpload.classList.add("hide");
                        }
                    };
                    reader.readAsDataURL(f);
                }
            });
        });
    });

    document.body.addEventListener("click", function (e) {
        if (e.target.classList.contains("upload__img-close")) {
            var file = e.target.parentElement.getAttribute("data-file");
            for (var i = 0; i < imgArray.length; i++) {
                if (imgArray[i].name === file) {
                    imgArray.splice(i, 1);
                    break;
                }
            }
            e.target.parentElement.parentElement.remove();

            var hiddenUpload = document.querySelector(".upload-hidden");
            if (imgArray.length === 0 && hiddenUpload) {
                hiddenUpload.classList.remove("hide");
            }
        }
    });
}