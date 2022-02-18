const mongoose =require('mongoose')
const crypto =require('crypto');
const uuid =require('uuid')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        maxlength:40,
        trime:true,
        required:true,
    },
    email:{
        type:String,
        maxlength:40,
        trime:true,
        required:true,
        unique:true
    },
    hashedd_password:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        trime:true,
    },
    role:{
        type:Number,
       default:0
    },
    history:{
        type:Array,
       default:[]
    },
    salt:{
        type:String,
    },
},{timestamps:true})
userSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = uuid.v1();
    this.hashedd_password = this.cryptPassword(password)
})
.get(function() {
    return this._password;
})
userSchema.methods={
    authenticate : function (Text){
       return this.cryptPassword(Text)===this.hashedd_password
    },
    cryptPassword: function(password){
           if(!password) return '';
          try{

            return crypto
                .createHmac('sha1', this.salt)
               .update(password)
               .digest('hex');
          }
          catch (error){
              
            return ''

          }
    }
}

module.exports =mongoose.model('User',userSchema);
