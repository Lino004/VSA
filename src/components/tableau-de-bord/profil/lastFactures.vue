<template>
  <div>
    <h5 class="is-size-5 has-text-grid-2 mb-20">
      {{$t('profil.lastFactures.titre')}}
    </h5>
    <b-table
      :data="data"
      id="list_last_factures">

      <template slot-scope="props">
        <b-table-column
          field="libelle"
          :label="$t('profil.lastFactures.libelle')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.libelle }}
        </b-table-column>
        <b-table-column
          field="numero"
          :label="$t('profil.lastFactures.numero')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.numero }}
        </b-table-column>
        <b-table-column
          field="partenaire"
          :label="$t('profil.lastFactures.partenaire')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.partenaire }}
        </b-table-column>
        <b-table-column
          field="client"
          :label="$t('profil.lastFactures.client')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.client }}
        </b-table-column>
        <b-table-column
          field="id_client"
          :label="$t('profil.lastFactures.id_client')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.id_client }}
        </b-table-column>
        <b-table-column
          field="montant"
          :label="$t('profil.lastFactures.montant')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          {{ props.row.montant }}
        </b-table-column>
        <b-table-column
          :label="$t('profil.lastFactures.option')"
          header-class="is-size-7 py-15"
          cell-class="has-text-default is-size-7 has-text-middle py-20">
          <b-button
            type="is-success"
            icon-right="eye"
            rounded>
            <span class="is-size-7">
              {{$t('profil.lastFactures.btnDetail')}}
            </span>
          </b-button>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon
                  icon="emoticon-sad"
                  size="is-large">
              </b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
      {
        id: 1,
        libelle: 'Médicament',
        numero: 'N° 234567',
        partenaire: 'Pharmacie Arconville',
        client: 'LINO Lino',
        id_client: 'BN234567',
        montant: '25 000F',
      },
    ],
  }),
};
</script>

<style>

</style>
