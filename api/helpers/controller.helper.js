//controller helper

const _buildErrorResponse = (controllerName, methodName, err) => {
  const _errCodeIsNumeric = errCode =>
    !isNaN(parseFloat(errCode)) && isFinite(errCode);

  err.description = err.description
    ? err.description + ` in ${controllerName}: ${methodName}`
    : null;
  err.code = _errCodeIsNumeric(err.code) ? err.code : 500;

  const jsonResultFailed = {
    ok: false,
    error: {
      code: err.code || 500,
      message: err.message || "Internal Server Error",
      description:
        err.description ||
        `Internal Application error in ${controllerName}: ${methodName}`
    }
  };
  return jsonResultFailed;
};

const handleSuccessResponse = (
  codeStatus,
  controllerName,
  methodName,
  result,
  res,
  req
) => {

  res.status(codeStatus).send(result);
};

const handleErrorResponse = (controllerName, methodName, err, res, req) => {

  var jsonResultFailed = _buildErrorResponse(controllerName, methodName, err);

  logger.logError(controllerName, methodName, err, req);

  res.status(err.code || 500).send(jsonResultFailed);
};


module.exports = {
  handleErrorResponse,
  handleSuccessResponse,
};
