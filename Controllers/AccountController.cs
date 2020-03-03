using Autodesk.Test.Managers;
using Autodesk.Test.Models;
using Microsoft.AspNetCore.Mvc;

namespace Autodesk.Test.Controllers
{
    [Route("api/[controller]/{action}")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountManager accountManager;

        public AccountController()
        {
            accountManager = new InMemoryAccountManager();
        }

        [HttpGet]
        public IActionResult CheckUsername([FromQuery]string username)
        {
            return Ok(new { isValid = accountManager.IsUserExist(username) });
        }

        [HttpPost]
        public IActionResult SignIn([FromBody]UserModel model)
        {
            return Ok(new { User = accountManager.SignIn(model) });
        }

        [HttpPost]
        public IActionResult SignUp([FromBody]UserModel model)
        {
            return Ok(new { User = accountManager.SignUp(model) });
        }
    }
}