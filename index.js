var Jimp = require("jimp");

exports.addToImage = function (inputimage, exportimage) {
    Jimp.read(inputimage, (err, original_img) => {
        if (err) {
            console.log(err);
            return;
        } else {
            Jimp.read(__dirname + "/images/image.png", (err, khalifa) => {
                if (err) {
                    console.log("error", err);
                } else {
                    const o_width = original_img.getWidth();
                    const o_height = original_img.getHeight();

                    let w = khalifa.getWidth();
                    let h = khalifa.getHeight();

                    if (o_width < w || o_height < h) {
                        if (o_width / o_height < 1) {
                            // smaller width
                            h = Math.round((h * o_width) / w);
                            w = o_width;
                        } // smaller height
                        else {
                            w = Math.round((w * o_height) / h);
                            h = o_height;
                        }
                    }

                    khalifa.resize(w, h);

                    original_img.blit(
                        khalifa,
                        Math.round((o_width - w) / 2),
                        o_height - h
                    );
                    original_img.write(exportimage);
                }
            });
        }
    });
};
