'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _TeamsRoutes = require('./routes/TeamsRoutes');

var _TeamsRoutes2 = _interopRequireDefault(_TeamsRoutes);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _CustomLogger = require('./config/CustomLogger');

var _CustomLogger2 = _interopRequireDefault(_CustomLogger);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _keycloakConnect = require('keycloak-connect');

var _keycloakConnect2 = _interopRequireDefault(_keycloakConnect);

var _LoginRoutes = require('./routes/LoginRoutes');

var _LoginRoutes2 = _interopRequireDefault(_LoginRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const router = _express2.default.Router();

const memoryStore = new _expressSession2.default.MemoryStore();

const keycloak = new _keycloakConnect2.default({
    store: memoryStore
});

//spécification des options de session keycloak
// on donne un secret fournie par keycloak
const sessionOptions = {
    secret: 'd2188556-28d1-445f-8775-7fd64d3457c6',
    bearerOnly: true,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
};
//enchainement des middlewares
//décodage du body de la requete
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
//appel d'une session keycloak
app.use((0, _expressSession2.default)(sessionOptions));
app.use(keycloak.middleware());
//appel de la route de l'API REST
app.use(router);

//chargement de l'api teamsRoutes
(0, _TeamsRoutes2.default)(app, router, keycloak);
(0, _LoginRoutes2.default)(app, router, keycloak);
//lancement du serveur
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiYXBwIiwicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsIm1lbW9yeVN0b3JlIiwic2Vzc2lvbiIsIk1lbW9yeVN0b3JlIiwia2V5Y2xvYWsiLCJLZXljbG9hayIsInN0b3JlIiwic2Vzc2lvbk9wdGlvbnMiLCJzZWNyZXQiLCJiZWFyZXJPbmx5IiwicmVzYXZlIiwic2F2ZVVuaW5pdGlhbGl6ZWQiLCJ1c2UiLCJib2R5UGFyc2VyIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsIm1pZGRsZXdhcmUiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxNQUFNQSxNQUFNLHdCQUFaO0FBQ0EsTUFBTUMsU0FBU0Msa0JBQVFDLE1BQVIsRUFBZjs7QUFFQSxNQUFNQyxjQUFjLElBQUlDLHlCQUFRQyxXQUFaLEVBQXBCOztBQUVBLE1BQU1DLFdBQVcsSUFBSUMseUJBQUosQ0FBYTtBQUMxQkMsV0FBT0w7QUFEbUIsQ0FBYixDQUFqQjs7QUFLQTtBQUNBO0FBQ0EsTUFBTU0saUJBQWlCO0FBQ25CQyxZQUFRLHNDQURXO0FBRW5CQyxnQkFBWSxJQUZPO0FBR25CQyxZQUFRLEtBSFc7QUFJbkJDLHVCQUFtQixJQUpBO0FBS25CTCxXQUFPTDtBQUxZLENBQXZCO0FBT0E7QUFDQTtBQUNBSixJQUFJZSxHQUFKLENBQVFDLHFCQUFXQyxVQUFYLENBQXNCLEVBQUNDLFVBQVUsS0FBWCxFQUF0QixDQUFSO0FBQ0FsQixJQUFJZSxHQUFKLENBQVFDLHFCQUFXRyxJQUFYLEVBQVI7QUFDQTtBQUNBbkIsSUFBSWUsR0FBSixDQUFRLDhCQUFRTCxjQUFSLENBQVI7QUFDQVYsSUFBSWUsR0FBSixDQUFRUixTQUFTYSxVQUFULEVBQVI7QUFDQTtBQUNBcEIsSUFBSWUsR0FBSixDQUFRZCxNQUFSOztBQUVBO0FBQ0EsMkJBQVlELEdBQVosRUFBaUJDLE1BQWpCLEVBQXlCTSxRQUF6QjtBQUNBLDJCQUFZUCxHQUFaLEVBQWdCQyxNQUFoQixFQUF1Qk0sUUFBdkI7QUFDQTtBQUNBUCxJQUFJcUIsTUFBSixDQUFXLElBQVgsRUFBaUIsTUFBTTtBQUNuQkMsWUFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0gsQ0FGRCIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCB0ZWFtc1JvdXRlcyBmcm9tICcuL3JvdXRlcy9UZWFtc1JvdXRlcyc7XHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vY29uZmlnL0N1c3RvbUxvZ2dlcic7XHJcbmltcG9ydCBzZXNzaW9uIGZyb20gJ2V4cHJlc3Mtc2Vzc2lvbic7XHJcbmltcG9ydCBLZXljbG9hayBmcm9tICdrZXljbG9hay1jb25uZWN0JztcclxuaW1wb3J0IGxvZ2luUm91dGVzIGZyb20gJy4vcm91dGVzL0xvZ2luUm91dGVzJztcclxuXHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG5jb25zdCBtZW1vcnlTdG9yZSA9IG5ldyBzZXNzaW9uLk1lbW9yeVN0b3JlKCk7XHJcblxyXG5jb25zdCBrZXljbG9hayA9IG5ldyBLZXljbG9hayh7XHJcbiAgICBzdG9yZTogbWVtb3J5U3RvcmVcclxufSk7XHJcblxyXG5cclxuLy9zcMOpY2lmaWNhdGlvbiBkZXMgb3B0aW9ucyBkZSBzZXNzaW9uIGtleWNsb2FrXHJcbi8vIG9uIGRvbm5lIHVuIHNlY3JldCBmb3VybmllIHBhciBrZXljbG9ha1xyXG5jb25zdCBzZXNzaW9uT3B0aW9ucyA9IHtcclxuICAgIHNlY3JldDogJ2QyMTg4NTU2LTI4ZDEtNDQ1Zi04Nzc1LTdmZDY0ZDM0NTdjNicsXHJcbiAgICBiZWFyZXJPbmx5OiB0cnVlLFxyXG4gICAgcmVzYXZlOiBmYWxzZSxcclxuICAgIHNhdmVVbmluaXRpYWxpemVkOiB0cnVlLFxyXG4gICAgc3RvcmU6IG1lbW9yeVN0b3JlXHJcbn07XHJcbi8vZW5jaGFpbmVtZW50IGRlcyBtaWRkbGV3YXJlc1xyXG4vL2TDqWNvZGFnZSBkdSBib2R5IGRlIGxhIHJlcXVldGVcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiBmYWxzZX0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbi8vYXBwZWwgZCd1bmUgc2Vzc2lvbiBrZXljbG9ha1xyXG5hcHAudXNlKHNlc3Npb24oc2Vzc2lvbk9wdGlvbnMpKTtcclxuYXBwLnVzZShrZXljbG9hay5taWRkbGV3YXJlKCkpO1xyXG4vL2FwcGVsIGRlIGxhIHJvdXRlIGRlIGwnQVBJIFJFU1RcclxuYXBwLnVzZShyb3V0ZXIpO1xyXG5cclxuLy9jaGFyZ2VtZW50IGRlIGwnYXBpIHRlYW1zUm91dGVzXHJcbnRlYW1zUm91dGVzKGFwcCwgcm91dGVyLCBrZXljbG9hayk7XHJcbmxvZ2luUm91dGVzKGFwcCxyb3V0ZXIsa2V5Y2xvYWspO1xyXG4vL2xhbmNlbWVudCBkdSBzZXJ2ZXVyXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NlcnZlciBydW5uaW5nIG9uIHBvcnQgMzAwMCcpO1xyXG59KTtcclxuIl19