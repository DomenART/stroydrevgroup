import React from 'react'
import styles from './ProjectParams.module.sass'

const ProjectParams = ({ params }) =>
    <div className={styles.container}>
        <div className={styles.grid}>
            <div className={styles.column}>
                <div className={styles.param}>
                    <div className={styles.label}>Этажей</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{__html:params.floors}}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Спален</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{__html:params.bedrooms}}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Терраса</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{
                            __html: params.terrace ? '+' : '-'
                        }}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Балкон</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{
                            __html: params.terrace ? '+' : '-'
                        }}
                    />
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.param}>
                    <div className={styles.label}>Санузлов</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{__html:params.bathrooms}}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Котельная</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{
                            __html: params.boilerroom ? '+' : '-'
                        }}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Подвал</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{
                            __html: params.basement ? '+' : '-'
                        }}
                    />
                </div>
                <div className={styles.param}>
                    <div className={styles.label}>Гараж</div>
                    <div
                        className={styles.value}
                        dangerouslySetInnerHTML={{
                            __html: params.garage ? '+' : '-'
                        }}
                    />
                </div>
            </div>
            <div className={styles.column}>
                {params.first_floor_height && (
                    <div className={styles.param}>
                        <div className={styles.label}>Высота 1 эт.</div>
                        <div
                            className={styles.value}
                            dangerouslySetInnerHTML={{
                                __html: `${params.first_floor_height} м`
                            }}
                        />
                    </div>
                )}
                {params.second_floor_height && (
                    <div className={styles.param}>
                        <div className={styles.label}>Высота 2 эт.</div>
                        <div
                            className={styles.value}
                            dangerouslySetInnerHTML={{
                                __html: `${params.second_floor_height} м`
                            }}
                        />
                    </div>
                )}
                <div className={`${styles.param} uk-visible@l`}/>
                {params.roof && (
                    <div className={styles.param}>
                        <b className={styles.label}>Крыша:</b>
                        <div
                            className={styles.valueText}
                            dangerouslySetInnerHTML={{__html: params.roof}}
                        />
                    </div>
                )}
            </div>
        </div>
    </div>

export default ProjectParams