<?php

namespace app\modules\api\controllers;

use yii\helpers\Json;

class ErrorController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  /**
   * Renders the index view for the module
   * @return array
   * @throws \yii\base\Exception
   */
  public function actionIndex()
  {
    \Yii::$app->response->statusCode = 404;
    \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    return "error";
  }
}
