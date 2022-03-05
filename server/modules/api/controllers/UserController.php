<?php

namespace app\modules\api\controllers;

use app\common\Constants;
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
      Yii::debug("!setPassword");
      Yii::$app->response->statusCode = 401;
      return [
        Constants::RESULT => Constants::ERROR,
        Constants::MESSAGE => $user->getErrors('password'),
      ];
    }

    $transaction = Yii::$app->db->beginTransaction();
    try {
      Yii::debug("1");
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
}
