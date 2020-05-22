using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public bool gameOver = false;
    public float speed = 5f;
    public float min_y, max_y; 
    private float mouseposX;
    private float playposY;
    public Canvas endScreen;

    [SerializeField]
    private GameObject playerBullet;

    [SerializeField]
    private Transform soapSpawn;

    public float attk_Timer = 0.35f;
    private float current_attk_time;
    private bool canAttk;
    private AudioSource explosionSound;

    private void Awake()
    {
        explosionSound = GetComponent<AudioSource>();
    }

    // Start is called before the first frame update
    void Start()
    {
        endScreen.GetComponent<Canvas>().enabled = false;
        current_attk_time = attk_Timer;
    }

    // Update is called once per frame
    void Update()
    {

    }

    void MovePlayer()
    {

    }

    public void MovePlayerUp()
    {
        Vector3 temp = transform.position;
        temp.y += speed * Time.deltaTime;

        if (temp.y > max_y)
            temp.y = max_y;

        transform.position = temp;
    }

    public void MovePlayerDown()
    {
            Vector3 temp = transform.position;
            temp.y -= speed * Time.deltaTime;

            if (temp.y < min_y)
                temp.y = min_y;

            transform.position = temp;
    }
    /*{
        if (Input.GetAxisRaw("Vertical") > 0f)
        {
            Vector3 temp = transform.position;
            temp.y += speed * Time.deltaTime;

            if (temp.y > max_y)
                temp.y = max_y;

            transform.position = temp;
        }
        else if (Input.GetAxisRaw("Vertical") < 0f)
        {
            Vector3 temp = transform.position;
            temp.y -= speed * Time.deltaTime;

            if (temp.y < min_y)
                temp.y = min_y;

            transform.position = temp;
        }
    }*/

    public void Shoot()
    {
        attk_Timer += Time.deltaTime;
        if (attk_Timer > current_attk_time)
        {
            canAttk = true;
        }

            if (canAttk)
            {
                canAttk = false;
                attk_Timer = 0f;

                Instantiate(playerBullet, soapSpawn.position, Quaternion.identity);

                //play sound FX
            }
    }

    void TurnOffGameObject()
    {
        gameObject.SetActive(false);
    }

    private void OnTriggerEnter2D(Collider2D target)
    {
        if (target.tag == "Bullet" || target.tag == "Enemy")
        {
            endScreen.GetComponent<Canvas>().enabled = true;
            Debug.Log("GAME OVER");
            explosionSound.Play();
            Invoke("TurnOffGameObject", 0.25f);
            Destroy(gameObject);
        }
    }
}
