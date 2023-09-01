using AlmostTrello.Utilities.Constants;
using AlmostTrello.Utilities.Helpers;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIGateway.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class AuthorizationMiddleware
    {
        private readonly RequestDelegate _next;

        public AuthorizationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext httpContext)
        {   
            if (httpContext != null 
                && !Constants.SkipUrls.Any(x => x.Equals(httpContext.Request.Path, StringComparison.OrdinalIgnoreCase)))
            {
                var token = httpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
                if (!string.IsNullOrEmpty(token))
                {
                    bool isValid = JwtHelper.ValidatedToken(token);
                    if (isValid)
                        await _next(httpContext);
                    else
                        await ReturnInvalidTokenResponse(httpContext);
                }
                else
                {
                    await ReturnInvalidTokenResponse(httpContext);
                }
            }
            else
            {
                await _next(httpContext);
            }
        }

        private async Task ReturnInvalidTokenResponse(HttpContext context)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = 401;
            await context.Response.CompleteAsync();
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class AuthorizationMiddlewareExtensions
    {
        public static IApplicationBuilder UseAuthorizationMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<AuthorizationMiddleware>();
        }
    }
}