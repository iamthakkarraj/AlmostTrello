using AlmostTrello.BusinessEntities.ViewModels;
using AlmostTrello.BusinessLogic.Interfaces;
using AlmostTrello.DataEntities.DataModels;
using AlmostTrello.Utilities;
using AlmostTrello.Utilities.Constants;
using AlmostTrello.Utilities.Helpers;
using AlmostTrello.Utilities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;
using static AlmostTrello.Utilities.Constants.RouteConstants;

namespace AlmostTrello.API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        #region Variables
        IUserService _userService;
        #endregion

        #region Constructor
        public UsersController(IUserService userService)
        {
            this._userService = userService;
        }
        #endregion

        #region Action Methods
        [HttpPost]
        [Route(UserControllerRoutes.Authenticate)]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate(AuthenticationViewModel authenticationViewModel)
        {
            var isAuthenticated = await _userService.Authenticate(authenticationViewModel);
            if (isAuthenticated)
            {
                return Ok(
                    new GenericResponseModel<object>(
                        JwtHelper.GenerateToken(authenticationViewModel.Email)));
            }
            else
            {
                return Unauthorized(new GenericResponseModel<object>()
                {
                    ErrorCount=1,
                    ErrorMessages=new string[] { Constants.invalidCredentials }
                });
            }
        }

        [HttpPost]
        [Route(UserControllerRoutes.Register)]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegistrationViewModel registrationViewModel)
        {
            var user = await this._userService.Create(registrationViewModel);
            return Ok(new GenericResponseModel<object>(user));
        }
        #endregion    

    }

}
