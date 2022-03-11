<?php

namespace app\modules\api\controllers;

use app\common\Constants;
use app\models\Wif;
use Yii;

class WalletController extends \yii\web\Controller
{
  public $enableCsrfValidation = false;

  public function actionSaveWif()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
    Yii::$app->response->statusCode = 400;

    $wif = new Wif();
    $wif->wif = Yii::$app->request->post("wif");
    $wif->user_id = Yii::$app->user->identity->id;

    $transaction = Yii::$app->db->beginTransaction();
    try {
      if (!$wif->save()) {
        $transaction->rollBack();
        return [
          Constants::RESULT => Constants::ERROR,
          Constants::MESSAGE => $wif->getErrorSummary(false),
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
      Constants::MESSAGE => Yii::t('app', 'Wif saved.'),
    ];
  }


  public function actionGetWifs()
  {
    Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;

    $wifs =  Wif::findAll(['user_id' => Yii::$app->user->identity->id]);

    Yii::$app->response->statusCode = 200;
    return [
      Constants::RESULT => Constants::OK,
      Constants::DATA => array_column($wifs, 'wif'),
    ];
  }
}
