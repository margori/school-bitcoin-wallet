<?php

namespace app\modules\api\controllers;

use app\common\Constants;
use app\models\LoginForm;
use app\models\User;
use Yii;

class UserController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  public function actionRegister()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 400;

    $user = new User();
    $user->username = Yii::$app->request->post("username");
    $user->password = Yii::$app->request->post("password");
    $user->generateAuthKey();

    if (!$user->setPassword(Yii::$app->request->post("password"))) {
      Yii::$app->response->statusCode = 401;
      return [
        Constants::RESULT => Constants::ERROR,
        Constants::MESSAGE => $user->getErrors('password'),
      ];
    }

    $transaction = Yii::$app->db->beginTransaction();
    try {
      if (!$user->save()) {
        $transaction->rollBack();
        return [
          Constants::RESULT => Constants::ERROR,
          Constants::MESSAGE => $user->getErrorSummary(false),
        ];
      }

      $transaction->commit();
    } catch (\Exception $e) {
      $transaction->rollBack();
      return [
        Constants::RESULT => Constants::ERROR,
        Constants::MESSAGE => $e->getMessage(),
        "trace" => YII_DEBUG ? $e->getTraceAsString() : "",
      ];
    }

    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::MESSAGE => Yii::t('app', 'Registration successful.'),
    ];
  }

  public function actionLogin()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 400;

    $loginForm = new LoginForm();
    $loginForm->username = Yii::$app->request->post("username");
    $loginForm->password = Yii::$app->request->post("password");

    if (!$loginForm->login()) {
      Yii::$app->response->statusCode = 403;
      return [
        Constants::RESULT => Constants::ERROR,
        Constants::MESSAGE => $loginForm->getErrors('username'),
      ];
    }

    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::MESSAGE => Yii::t('app', 'Loggin successful.'),
      Constants::DATA => $loginForm->getUser()
    ];
  }

  public function actionLogout()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 400;

    if (!Yii::$app->user->logout()) {
      Yii::$app->response->statusCode = 500;
      return [
        Constants::RESULT => Constants::ERROR,
        Constants::MESSAGE => 'Error while logging out',
      ];
    }

    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::MESSAGE => Yii::t('app', 'Logout successful.'),
    ];
  }
}
