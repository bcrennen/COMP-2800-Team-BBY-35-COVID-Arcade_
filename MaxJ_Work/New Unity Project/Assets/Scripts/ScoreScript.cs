using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreScript : MonoBehaviour
{
    float score = 0;
    public Canvas EndingScreen;

    public Text highScore;
    public Text currentScore;

    private void Start()
    {
        highScore.text = "Highscore: " + PlayerPrefs.GetFloat("Highscore", 0);
    }

    private void Update()
    {
        score = (10 * EnemyScript.score);
        currentScore.text = "Score: " + score;

        if (score > PlayerPrefs.GetFloat("Highscore"))
        {
            PlayerPrefs.SetFloat("Highscore", score);
            highScore.text = "Highscore: " + PlayerPrefs.GetFloat("Highscore", 0);
        }
    }
}
