using Autodesk.Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Autodesk.Test.Managers
{
    public interface IAccountManager
    {
        bool IsUserExist(string userName);
        UserModel SignIn(UserModel model);
        UserModel SignUp(UserModel model);
    }
}
