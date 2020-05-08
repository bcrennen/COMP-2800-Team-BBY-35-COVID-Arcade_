using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyScript : MonoBehaviour
{

    public static float score;

    public float speed = 5f;
    public float rotate_speed = 50f;

    public bool canShoot;
    public bool canRotate;
    private bool canMove = true;

    public float bound_x = -11f;

    public Transform attack_point;
    public GameObject bulletPrefab;

    private Animator anim;
    private AudioSource explosionSound;
    // Start is called before the first frame update

    void Awake()
    {
        anim = GetComponent<Animator>();
        explosionSound = GetComponent<AudioSource>();
    }

    void Start()
    {
        if (canShoot)
            Invoke("StartShooting", Random.Range(1f, 3f));

        if (canRotate)
        {
            if (Random.Range(0,2) > 0)
            {
                rotate_speed = Random.Range(rotate_speed, rotate_speed + 20f);
            }


        }


    }

    // Update is called once per frame
    void Update()
    {
        Move();
        RotateEnemy();
    }

    void Move()
    {
        if (canMove)
        {
            Vector3 temp = transform.position;
            temp.x -= speed * Time.deltaTime;
            transform.position = temp;

            if (temp.x < bound_x)
            {
                gameObject.SetActive(false);
            }
        }
        
    }

    void RotateEnemy()
    {
        if (canRotate)
        {
            transform.Rotate(new Vector3(0f, 0f, rotate_speed * Time.deltaTime), Space.World);
        }
    }

    void StartShooting()
    {
        GameObject bullet = Instantiate(bulletPrefab, attack_point.position, Quaternion.identity);
        bullet.GetComponent<BulletScript>().is_EnemyBullet = true;

        if (canShoot)
            Invoke("StartShooting", Random.Range(1f, 3f));
    }

    void TurnOffGameObject()
    {
        gameObject.SetActive(false);
    }

    private void OnTriggerEnter2D(Collider2D target)
    {
        if (target.tag == "PlayerBullet")
        {
            score++;
            explosionSound.Play();
            canMove = false;
            canShoot = false;
            CancelInvoke("StartShooting");
            Invoke("TurnOffGameObject", 0.25f);
            
            
            anim.Play("death");
        }
    }





}
