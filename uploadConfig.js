const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => cb(null, file.originalname)
});
//file khác định dang thì không thể lưu trên server
function fileFilter(req, file, cb) {
    const { mimetype } = file;
    console.log(file);
    if (mimetype === 'image/png' || mimetype === 'image/jpeg') {
        return cb(null, true);
    }
    cb(new Error('File khong dung dinh dang!'));
}

const limits = { fileSize: 1024000 };
//đối tượng truyền vào multer chỉ có 4 thuộc tính
const upload = multer({ storage, limits, fileFilter });

module.exports = upload;
