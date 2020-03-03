using Autodesk.Test.Models;
using System.Collections.Generic;
using System.Linq;

namespace Autodesk.Test.Managers
{
    public class InMemoryAccountManager : IAccountManager
    {
        private static List<UserModel> users = new List<UserModel> {
        new UserModel{ Username = "johnsmith",  Password = "123456", FirstName = "John", LastName = "Smith"},
        new UserModel{ Username = "vikas",  Password = "123456", FirstName = "Vikas", LastName = "-"},
        };

        public bool IsUserExist(string userName)
        {
            return users.Any(x => x.Username == userName?.ToLower());
        }

        public UserModel SignIn(UserModel model)
        {
            return users.FirstOrDefault(x => x.Username == model?.Username?.ToLower() && x.Password == model.Password);
        }

        public UserModel SignUp(UserModel model)
        {
            users.Add(model);
            return SignIn(model);
        }
    }
}
